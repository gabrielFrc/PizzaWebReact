import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import LandingPage from ".";
import { Provider } from "react-redux";
import store from "../../features/store";
import { HashRouter, Routes, Route } from "react-router-dom";
describe("LandPage", () => {
    it("should render correctly", () => {
        render(
            <Provider store={store}>
                <HashRouter>
                    <Routes>
                        <Route exact path='/' element={<LandingPage/>}></Route>
                    </Routes>
                </HashRouter>
            </Provider> 
        )

        const theh1 = screen.getByText("Slice & Spice");
        expect(theh1).toBeInTheDocument();
    })
})