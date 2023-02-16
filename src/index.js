import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {HashRouter, Navigate, Route, Routes} from 'react-router-dom';

import {store} from './app/store';
import {Layout} from './common/components/layout';
import {LayoutMainPage} from './common/components/layout-main-page';
import {BooksPage} from './pages/book-page';
import {MainPage} from './pages/main';
import {Сontract} from './pages/main/сontract/сontract';

import './index.css';
import {ALL, BOOK_PAGE, HOME, MAIN_PAGE, RULES, TREATY} from './app/routs';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    // <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path={HOME} element={<Layout/>}>
                        <Route element={<LayoutMainPage/>}>
                            <Route index={true} element={<Navigate to={ALL}/>}/>
                            <Route path={MAIN_PAGE} element={<MainPage/>}/>
                            <Route path={RULES} element={<Сontract title="Правила пользования"/>}/>
                            <Route path={TREATY} element={<Сontract title="Договор оферты"/>}/>
                        </Route>
                        <Route path={BOOK_PAGE} element={<BooksPage/>}/>
                    </Route>
                </Routes>
            </HashRouter>
        </Provider>
    // </React.StrictMode>
);
