import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {HashRouter, Navigate, Route, Routes} from 'react-router-dom';

import {store} from './app/store';
import {Layout} from './common/components/layout';
import {LayoutMainPage} from './common/components/layout-main-page';
import {BooksPage} from './pages/book-page';
import {MainPage} from './pages/main';

import './index.css';
import {ROUTS} from './constans/routs';
import {Сontract} from './common/components/сontract';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    // <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path={ROUTS.HOME} element={<Layout/>}>
                        <Route element={<LayoutMainPage/>}>
                            <Route index={true} element={<Navigate to={ROUTS.ALL}/>}/>
                            <Route path={ROUTS.MAIN_PAGE} element={<MainPage/>}/>
                            <Route path={ROUTS.RULES} element={<Сontract title="Правила пользования"/>}/>
                            <Route path={ROUTS.TREATY} element={<Сontract title="Договор оферты"/>}/>
                        </Route>
                        <Route path={ROUTS.BOOK_PAGE} element={<BooksPage/>}/>
                    </Route>
                </Routes>
            </HashRouter>
        </Provider>
    // </React.StrictMode>
);
