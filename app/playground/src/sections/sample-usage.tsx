





export default function SampleUsage() {



    return (
        <div className="flex justify-center items-center w-full h-screen bg-white">
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="text-background w-full flex justify-start text-4xl font-bold my-4">Sample usage</h1>
                <div className="flex flex-col justify-center items-center gap-4">
                    <div className="flex justify-center items-center gap-4 w-[70vw]">
                        <div className="flex justify-center items-center bg-neutral-200 w-full h-full p-8 rounded-xl border border-dotted border-neutral-300">
                            <div className="flex justify-center items-center w-[150px] h-[60px] bg-white rounded-xl">
                                <span className="w-[100px] h-[10px] bg-neutral-300"></span>
                            </div>
                        </div>
                        <div className="flex justify-center items-center bg-neutral-200 p-8 rounded-xl w-full h-full border border-dotted border-neutral-300">
                            <a
                                className="text-5xl font-bold  bg-white rounded-xl p-2 text-transparent bg-clip-text"
                                style={{
                                    backgroundColor: "#000000",
                                    backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 4px, transparent 1px)",
                                    backgroundSize: "20px 20px",
                                }}
                            >Hello World</a>
                        </div>
                    </div>
                    <div className="flex justify-betwen w-full gap-4 ">
                        <div className="flex justify-center items-center w-full flex-1 bg-neutral-200 rounded-xl p-4 border border-dotted border-neutral-300">
                            <section className="flex flex-col justify-center items-center w-[600px] h-[400px] bg-white gap-2 ">
                                <span className="w-[300px] h-[25px] bg-neutral-300" />
                                <span className="w-[250px] h-[25px] bg-neutral-300" />
                                <span className="w-[300px] h-[10px] bg-neutral-300 mt-2" />
                                <div className="flex justify-center items-center gap-4 mt-4">
                                    <span className="w-[80px] h-[30px] bg-neutral-300 mt-2" />
                                    <span className="w-[80px] h-[30px] bg-neutral-300 mt-2" />
                                </div>
                            </section>
                        </div>
                        <div className="flex justify-center items-center w-full flex-1 bg-neutral-200 rounded-xl p-4 border border-dotted border-neutral-300">
                            <div className="flex justify-center items-center p-4 rounded-2xl bg-red-200">
                                <div className="flex flex-col justify-center p-12 items-start gap-2 w-[300px] h-[400px] bg-white rounded-2xl">
                                    <span className="w-[80px] h-[20px] bg-neutral-300" />
                                    <span className="w-[200px] h-[25px] bg-neutral-300" />
                                    <span className="w-[80px] h-[20px] mt-4 bg-neutral-300" />
                                    <span className="w-[200px] h-[25px] bg-neutral-300" />
                                    <span className="w-[150px] h-[35px] mx-8 mt-8 bg-neutral-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>

        </div>
    )
}