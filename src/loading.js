import * as React from "react";
import { Progress } from "@nextui-org/react";

function Loading() {

    return (
        <div className="w-screen h-screen top-0 left-0 bg-[#d9d9d9] flex flex-col justify-center items-center gap-10">
            <img src="logo.svg" className="w-64 h-64" />
            <Progress
                aria-label="Loading enviorment..."
                size="md"
                isIndeterminate
                className="max-w-xs"
            />
            <span className="absolute bottom-5 right-5">version 0.0.1 pre-alpha</span>
        </div>
    );
}

export default Loading;
