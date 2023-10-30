"use client";

import Footer from "@/common/widget/footer";
import Header from "@/common/widget/header";
import * as React from "react";

export interface ICollectionsProps {}

export default class Collections extends React.Component<ICollectionsProps> {
    public render() {
        return (
            <>
                <Header />
                <div>
                    <div>This is Collections page</div>
                </div>
                <Footer />
            </>
        );
    }
}
