import { SearchIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid';
import Contact from './Contact';

const contacts = [
    {
        name: "Mr.Apple",
        src: "/images/users/orange.jpg",
        profile: "/images/avatars/apple.jpg"
    },
    {
        name: "Mr Banana",
        src: "/images/users/hamza_muiret.jpg",
        profile: "/images/avatars/banana.jpg"
    },
    {
        name: "Pineapple",
        src: "/images/users/ayoub_hakkam.jpg",
        profile: "/images/avatars/pieapple.jpg"
    },


];

function Widgets() {
    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6" />
                    <SearchIcon className="h-6" />
                    <DotsHorizontalIcon className="h-6" />
                </div>
            </div>

            {contacts.map((contact) => (
                <Contact key={contact.profile} src={contact.profile} name={contact.name}/>
            ))}
        </div>
    );
}

export default Widgets