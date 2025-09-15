// "use client";

// import React from "react";

// export default function AutoColumnGrid() {
//     return (
//         <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[1px]">
//             <div className="bg-blue-500 p-6 aspect-[4/3">Item 1</div>
//             <div className="bg-blue-500 p-6 aspect-[4/3] ">Item 2</div>
//             <div className="bg-blue-500 p-6 aspect-[4/3] ">Item 3</div>
//             <div className="bg-blue-500 p-6 aspect-[4/3] ">Item 4</div>
//         </div>

//     );
// }



"use client";

import React from "react";

export default function AutoColumnGrid() {
    return (
        <div className="grid gap-[1px] 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-3">
            <div className="bg-blue-500 p-6 aspect-[4/3]">Item 1</div>
            <div className="bg-blue-500 p-6 aspect-[4/3]">Item 2</div>
            <div className="bg-blue-500 p-6 aspect-[4/3]">Item 3</div>
            <div className="bg-blue-500 p-6 aspect-[4/3]">Item 4</div>
        </div>
    );
}
 