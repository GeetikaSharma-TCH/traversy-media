import Link from "next/link";
const Header = () => {
    return ( 
        <div className="h-[943px]">
            <h6>Welcome to Traversay  Medias</h6>
            <ul>
                <li><Link href="/" as="style">Home</Link></li>
                <li><Link href="/about" as="style">About </Link></li>
                <li><Link href="/contactUs" as="style">Contact Us</Link></li>
            </ul>
        </div>
    );
}
 
export default Header;