// * react
import { useContext, useEffect } from 'react';
import RowCtx from './context/AppContext';

// * components
import Layout from '@components/layout/Layout';
import Main from '@components/screens/Main';

const App = () => {
    const { saveRow, rowData, rowsData } = useContext(RowCtx);

    useEffect(() => {
        saveRow(rowData(null, 'level'), rowsData);
    }, []);

    return (
        <Layout>
            <Main />
        </Layout>
    );
};

export default App;
