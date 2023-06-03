import { useEffect, useState } from 'react'
import './shakeImageWithScroll.css'
import { useSelector } from 'react-redux'

const ShakeImageWithScroll = (props) => {

    const scrollY = useSelector((state) => state.windowScrollY.value)

    const innerSize = useSelector((state) => state.windowInnerSize.value)

    const [picLogo, setPicLogo] = useState(0)

    const [position, setPosition] = useState("fixed")
    const [justifyContent, setJustifyContent] = useState("flex-start")

    const [height] = useState(((props.item.length * props.item.distance) - props.item.distance))

    const setId = () => {
        return `pmAnimationLogo${props.item.id}`;
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

    const lastLogoItem = () => {
        return Math.floor(props.item.length - 1);
    };

    const setLogoItem = () => {
        return Math.floor((scrollY - startItem()) / props.item.distance);
    };

    const handleSetPicLogo = (input) => {
        setPicLogo(input);
    };

    useEffect(() => {
        if (scrollY < startItem()) {
            handleSetPicLogo(0)
            setPosition("relative")
            setJustifyContent("flex-start")
        }
        else if (scrollY > EndItem()) {
            handleSetPicLogo(lastLogoItem())
            setPosition("relative")
            setJustifyContent("flex-end")
        }
        else {
            handleSetPicLogo(setLogoItem())
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
                    <img src={process.env.PUBLIC_URL + `${props.item.id}/${picLogo}${props.item.formatFile}`}></img>
                </div>
            </div>
        </div>
    )
}

export default ShakeImageWithScroll