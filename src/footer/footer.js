import './footer.css'

const Footer = (props) => {
    return (
        <footer id="myFooter" className="myFooter sectionColor">
            <div>
                Majid Ghajari © {new Date().getUTCFullYear()}<br />
                <a href="http://www.ghajari3.ir" target="_blank"> www.ghajari3.ir</a><br />
                ghajari3@gmial.com
            </div>
        </footer>
    )
}
export default Footer
