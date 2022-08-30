// * react
import React, { createContext, useState, PropsWithChildren } from 'react';
import { RowData, NewRowData } from '@modules/types';

const initialState: any = {
    rowsData: [
        {
            id: 1,
            title: '',
            unit: '',
            quantity: 0,
            unitPrice: 0,
            price: 0,
            parent: null,
            type: 'level',
        },
    ],
    editableRow: 1,
    handleSelectEditRow: () => {},
    saveRow: () => {},
    rowData: () => {},
    createRow: () => {},
};

const RowCtx = createContext(initialState);

export const RowProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [rowsData, setRowsData] = useState<RowData[]>([]);
    const [editableRow, setEditableRow] = useState<number>(1);
    const [title, setTitle] = useState<string>('');
    const [unit, setUnit] = useState<string>('');
    const [quantity, setQuantity] = useState<number>(0);
    const [unitPrice, setUnitPrice] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);
    const [parent, setParent] = useState<number | null>(0);
    const [type, setType] = useState<string>('');

    const handleSelectEditRow = (id: number, storage: RowData[]) => {
        setEditableRow(id);
        const filtered = storage?.filter((row: RowData) => row.id === id);

        setTitle((filtered[0] && filtered[0].title) || '');
        setUnit((filtered[0] && filtered[0].unit) || '');
        setQuantity((filtered[0] && filtered[0].quantity) || 0);
        setUnitPrice((filtered[0] && filtered[0].unitPrice) || 0);
        setPrice((filtered[0] && filtered[0].price) || 0);
        setParent((filtered[0] && filtered[0].parent) || null);
        setType((filtered[0] && filtered[0].type) || '');
    };

    const rowData = (parentId: number | null, type: string) => {
        const data = {
            title: '',
            unit: '',
            quantity: 0,
            unitPrice: 0,
            price: 0,
            parent: parentId,
            type,
        };
        return data;
    };

    const handleEditRow = () => {
        const changedRow = {
            id: editableRow,
            title,
            unit,
            quantity,
            unitPrice,
            price: quantity * unitPrice,
            parent,
            type,
        };

        editRow(changedRow, rowsData);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;
        const { name } = e.target;

        if (name === 'title') setTitle(value);
        if (name === 'unit') setUnit(value);
        if (name === 'quantity') {
            setQuantity(Number(value.replace(/[^\d]/g, '')));
        }
        if (name === 'unitPrice') {
            setUnitPrice(Number(value.replace(/[^\d]/g, '')));
        }
    };

    // функция для сохранения строки
    function saveRow(rowData: NewRowData, storage: RowData[]) {
        const index = Math.max(...storage.map((v) => v.id), 0) + 1;
        const row: RowData = { id: index, ...rowData };
        const tmpArr = [...storage, row];

        setRowsData(tmpArr);
        handleSelectEditRow(index, tmpArr);
        recalculation(row.parent, storage);
    }

    // функция для изменения строки
    function editRow(row: RowData, storage: RowData[]) {
        const index = storage.findIndex((v) => v.id === row.id);
        // eslint-disable-next-line no-param-reassign
        const tmpArr = storage;
        tmpArr.splice(index, 1, row);

        setRowsData(tmpArr);
        recalculation(row.parent, storage);
        recalculationMainParent(storage);
    }

    function recalculationMainParent(storage: RowData[]) {
        const changedRows: RowData[] = [];
        let currentParentIndex = 0;

        if (currentParentIndex === -1) return changedRows;
        let currentParent = storage[currentParentIndex];

        do {
            const children = storage.filter(
                (v) => v.parent === currentParent.id,
            );
            const newPrice = children.reduce((acc, v) => acc + v.price, 0);
            if (currentParent.price === newPrice) break;
            // eslint-disable-next-line no-param-reassign
            storage[currentParentIndex].price = newPrice;
            changedRows.push(storage[currentParentIndex]);

            currentParentIndex = storage.findIndex(
                (v) => v.id === currentParent.parent,
            );
        } while (currentParentIndex !== -1);

        return changedRows;
    }

    function recalculation(parentID: number | null, storage: RowData[]) {
        const changedRows: RowData[] = [];
        if (parentID == null) return changedRows;
        let currentParentIndex = storage.findIndex((v) => v.id === parentID);

        if (currentParentIndex === -1) return changedRows;
        let currentParent = storage[currentParentIndex];

        do {
            const children = storage.filter(
                (v) => v.parent === currentParent.id,
            );
            const newPrice = children.reduce((acc, v) => acc + v.price, 0);
            if (currentParent.price === newPrice) break;
            // eslint-disable-next-line no-param-reassign
            storage[currentParentIndex].price = newPrice;
            changedRows.push(storage[currentParentIndex]);

            currentParentIndex = storage.findIndex(
                (v) => v.id === currentParent.parent,
            );
        } while (currentParentIndex !== -1);

        return changedRows;
    }

    return (
        <RowCtx.Provider
            value={{
                rowsData,
                editableRow,
                handleSelectEditRow,
                saveRow,
                editRow,
                rowData,
                handleEditRow,
                onChange,
                title,
                unit,
                quantity,
                unitPrice,
                price,
            }}
        >
            {children}
        </RowCtx.Provider>
    );
};

export default RowCtx;
