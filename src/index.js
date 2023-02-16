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

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    // <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route element={<LayoutMainPage/>}>
                            <Route index={true} element={<Navigate to="/books/all"/>}/>
                            <Route path="/books/:category" element={<MainPage/>}/>
                            <Route path="/rules" element={<Сontract title="Правила пользования"/>}/>
                            <Route path="/treaty" element={<Сontract title="Договор оферты"/>}/>
                        </Route>
                        <Route path="books/:category/:bookId" element={<BooksPage/>}/>
                    </Route>
                </Routes>
            </HashRouter>
        </Provider>
    // </React.StrictMode>
);
