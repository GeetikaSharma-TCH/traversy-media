'use client';
import Link from 'next/link'
import Header from '../Components/Header.jsx'
import Posts from '../Components/posts.jsx';
import axios from 'axios';
const AboutUsPage = () => {
    const getData = () => {
        console.log('ere')
        axios.post('https://jsonplaceholder.typicode.com/posts')
        .then((res) => console.log('res', res))
        .catch((err) => console.log('err', err))
    }
    return ( 
        <div>
            <Header></Header>
            <span>About Us Page</span> 
            <Posts></Posts>
            <button onClick={getData}>wqewq</button>
            <p>
                <Link href="/about/details" as="style">Click for more details</Link>
            </p>
        </div>
    );
}
 
export default AboutUsPage;