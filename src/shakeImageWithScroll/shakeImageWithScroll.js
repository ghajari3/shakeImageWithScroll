import { useEffect, useState } from 'react'
import './shakeImageWithScroll.css'
import { useSelector } from 'react-redux'

const ShakeImageWithScroll = (props) => {

    const scrollY = useSelector((state) => state.windowScrollY.value)

    const innerSize = useSelector((state) => state.windowInnerSize.value)

    const [imageIndex, setImageIndex] = useState(0)

    const [position, setPosition] = useState("fixed")
    const [justifyContent, setJustifyContent] = useState("flex-start")

    const [height] = useState(((props.item.length * props.item.distance) - props.item.distance))

    const setId = () => {
        return `imageItem${props.item.id}`;
    };

    const startItem = () => {
        return document.getElementById(setId())?.offsetTop;
    };

    const EndItem = () => {
        return startItem() + height;
    };

    const itemScrollHeight = () => {
        return height + innerSize.height;
    };

    const lastImage = () => {
        return Math.floor(props.item.length - 1);
    };

    const setImage = () => {
        return Math.floor((scrollY - startItem()) / props.item.distance);
    };

    const handleSetImageIndex = (input) => {
        setImageIndex(input);
    };

    useEffect(() => {
        if (scrollY < startItem()) {
            handleSetImageIndex(0)
            setPosition("relative")
            setJustifyContent("flex-start")
        }
        else if (scrollY > EndItem()) {
            handleSetImageIndex(lastImage())
            setPosition("relative")
            setJustifyContent("flex-end")
        }
        else {
            handleSetImageIndex(setImage())
            setPosition("fixed")
            setJustifyContent("flex-start")
        }

        return () => {

            return "";
        }
    }, [scrollY, innerSize]);

    return (
        <div className='ShakeImageWithScrollContainer sectionColor'
            style={{
                height: itemScrollHeight(),
                minHeight: itemScrollHeight(),
                justifyContent: justifyContent,
                backgroundColor: props.item.backColor
            }}
            id={setId()}>
            <div className="ShakeImageWithScrollItem"
                style={{
                    position: position,
                    zIndex: props.item.index
                }}>
                <div>
                    <img src={process.env.PUBLIC_URL + `${props.item.id}/${imageIndex}${props.item.formatFile}`}></img>
                </div>
            </div>
        </div>
    )
}

export default ShakeImageWithScroll