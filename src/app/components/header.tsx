const Header = (props: { title: string; text: string }) => {
    return (
        <div className="w-full bg-center bg-cover">
            <div className="flex justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
                <div className="container px-4 mx-auto">
                    <div className="max-w-5xl mx-auto text-left">
                        <h1 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">{props.title}</h1>
                        <p className="max-w-5xl mx-auto mb-10 text-lg text-gray-300">
                            {props.text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;