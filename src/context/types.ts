import { RowData } from '@modules/types';
import { Dispatch, SetStateAction } from 'react';

export interface Context {
    rowsData: RowData[];
    editableRow: number | null;
    setEditableRow: Dispatch<SetStateAction<number>>;
}
