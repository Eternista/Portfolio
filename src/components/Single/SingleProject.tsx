import Separete from "./Separate";

interface SingleProjectProps {
    heading: string;
    description: string;
    role: string;
    image: string;
    imageAlt: string;
    firm: string;
    client: string;
}

const SingleProject = ({heading, description, role, image, imageAlt, firm, client}: SingleProjectProps) => {

    return (
        <div className="flex items-center justify-between gap-12">
            <div className="bg-gray-800 rounded-3xl max-w-[600px] w-full px-14 py-40 flex items-center justify-center">
                <img src={image} alt={imageAlt}/>
            </div>
            <div className="context w-full">
                <h3 className="text-3xl">{heading}</h3>
                <p className="text-lg mb-8">{description}</p>
                <h4 className="text-md">PROJECT INFO</h4>
                <Separete classNames="w-full my-4" />
                <p className="flex justify-between w-full">
                    <strong><small>Client</small></strong>
                    <strong><small>{client}</small></strong>
                </p>
                <Separete classNames="w-full my-4" />
                <p className="flex justify-between w-full">
                    <strong><small>Working For</small></strong>
                    <strong><small>{firm}</small></strong>
                </p>
                <Separete classNames="w-full my-4" />
                <p className="flex justify-between w-full">
                    <strong><small>Role</small></strong>
                    <strong><small>{role}</small></strong>
                </p>
            </div>
        </div>
    )

}

export default SingleProject;