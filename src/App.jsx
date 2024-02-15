import Header from "./header";
import Image from "../src/image/view.jpg";
import Avatar from "./avatar";
import { data } from "./helpers";
import { useMemo, useState } from "react";
import { useCallback } from "react";

function App() {
    const [color, setColor] = useState("rgb(255,255,255)");
    const [age, setAge] = useState(90);
    const [aksiya, setAksiya] = useState(0);

    const handlyChange = () => {
        let a = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
            Math.random() * 255
        )},${Math.floor(Math.random() * 255)})`;
        setColor(a);
    };

    const addAksiya = () => {
        setAksiya(aksiya + 2);
    };
    //  useCallback(fn,dependense)
    const hand = useCallback((event) => {
        alert(event.currentTarget);
    }, []);

    const price = useMemo(() => {
        if (aksiya) {
            return 12000 - 12000 * (aksiya / 100);
        } else {
            return 12000;
        }
    }, [aksiya]);
    return (
        <>
            <div
                className='w-72 h-72 border-2'
                style={{ background: color }}></div>
            <button className='bg-[#166199]' onClick={handlyChange}>
                Change Color
            </button>

            <button className='bg-[#c31256]' onClick={hand}>
                Click me
            </button>

            <button className='bg-[#166199]' onClick={addAksiya}>
                Aksiya +{" "}
            </button>
            <div className='text-[#c39034]'>{price}</div>
            <div className='text-orange-500 bg-[#166199]'>{aksiya}</div>
            <p className='text-3xl font-bold underline'>Lorem, ipsum dolor.</p>
            <Header />

            {/* <img src={Image} alt='' /> */}

            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />

            {data.map((item) => (
                <div key={item.id}>
                    <div>{item.title}</div>
                    <div>salom</div>
                </div>
            ))}
        </>
    );
}

export default App;

// export import
