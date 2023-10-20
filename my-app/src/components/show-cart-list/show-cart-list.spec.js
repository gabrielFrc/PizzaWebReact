import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import ShowCartList from ".";
import { Provider } from "react-redux";
import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";
import store from "../../features/store";

const mockNavigate = jest.fn();
jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useNavigate: () => mockNavigate
}))

describe("showCartList", () => {
    it("should render correctly", () => {
        render(
            <Provider store={store}>
                <HashRouter>
                    <Routes>
                        <Route exact path='' element={<ShowCartList/>}></Route>
                    </Routes>
                </HashRouter>
            </Provider> 
        )
        const theh1 = screen.getByText("Your Cart");
        expect(theh1).toBeInTheDocument();
    })

    it("should call navigate correctly", () => {
        render(
            <Provider store={store}>
                <HashRouter>
                    <Routes>
                        <Route exact path='' element={<ShowCartList/>}></Route>
                    </Routes>
                </HashRouter>
            </Provider> 
        )

        const myBtn = screen.getByText("Order all");

        fireEvent.click(myBtn);
        
        expect(mockNavigate).toHaveBeenCalledWith("/cart")
    })
})