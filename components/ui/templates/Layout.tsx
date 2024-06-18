"use client"

import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
    type?: 'primary' | 'secondary',
    headerText: string,
    children: any
    userImage?: string
}

export default function Layout({ type, headerText, children, userImage }: LayoutProps) {
    return (
        <div className="w-full min-h-screen bg-cover 
            bg-ceanter bg-no-repeat flex flex-col items-center bg-black"
            style={{
                backgroundImage: `url('/bgs/bg-l-8.jpg')`,
            }}>
            <div className="w-screen flex flex-col
            lg:w-[712px] h-screen overflow-hidden relative ">
                <Header type={type} userImage={userImage}>
                    {headerText}
                </Header>
                <div className="
                 flex flex-col md:flex-row lg:w-[712px] 
                 lg:items-start pb-2 h-full
                 bg-[#ffffff15] rounded-md flex-1  
                 items-center p-1 lg:p-4 overflow-auto">
                    {children}
                </div>
                <div className="my-0.5 mt-1">
                    <Footer />
                </div>
            </div>
        </div>
    )

}