import { shakeTemplate } from './homeTemplate'
import { useDispatch } from 'react-redux'
import { setWindowScrollY } from '../stateManagement/windowScrollYSlice'
import Footer from '../footer/footer';
import ShakeImageWithScroll from '../shakeImageWithScroll/shakeImageWithScroll';
import './home.css'

const Home = (props) => {

    const dispatch = useDispatch()

    window.addEventListener('scroll', () => {
        dispatch(setWindowScrollY(window.scrollY))
    });

    return (
        <>
            <ShakeImageWithScroll item={shakeTemplate} />
            <Footer/>
        </>
    );
}

export default Home