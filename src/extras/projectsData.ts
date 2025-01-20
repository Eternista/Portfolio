import { SingleProjectProps } from "./interfaces";
import ChatPG from "../assets/Projects/ChatPG.jpg"
import PG from "../assets/Projects/pg-edu.jpg"
import Honda from "../assets/Projects/honda.jpg"
import KupHipoteke from "../assets/Projects/kuphipoteke.jpg"
import Przysnacki from "../assets/Projects/przysnacki.jpg"

const ProjectList: SingleProjectProps[] = [
    {
        heading: "ChatPG - AI for students and employes",
        description: "Project realized with a JAVA developer and AI - Spiecialist",
        role: "Frontend Developer",
        imageAlt: "Image of ChatPG Admin version",
        image: ChatPG,
        firm: "Politechnika Gdańska"
    },
    {
        heading: "PG Website - Information Website of PG",
        description: "",
        role: "Frontend Developer",
        imageAlt: "Image of pg.edu.pl",
        image: PG,
        firm: "Politechnika Gdańska"
    },
    {
        heading: "Honda - Hybrid Cars",
        description: "Website about Honda Hybrid Cars  - I've worked with Senior Frontend / Senior Backend Developer / UX - UI Designer / Task Menager / Client Assitent / Project Menager",
        role: "Frontend Developer",
        imageAlt: "Image of pg.edu.pl",
        image: Honda,
        firm: "GoldenSubmarine",
        client: "Honda"
    },
    {
        heading: "Kup Hipoteke",
        description: "My Job in this project was co-working with six people - Senior Frontend / Backend Developer / UI-UX Designer / Client Assistent / Project Menager / Task Menager",
        role: "Frontend Developer",
        imageAlt: "Image of pg.edu.pl",
        image: KupHipoteke,
        firm: "GoldenSubmarine",
        client: "Ultimo"
    },
    {
        heading: "Przysnacki",
        description: "My Job in this project was co-working with six people - Senior Frontend / Backend Developer / UI-UX Designer / Client Assistent / Project Menager / Task Menager",
        role: "Frontend Developer",
        imageAlt: "Image of pg.edu.pl",
        image: Przysnacki,
        firm: "GoldenSubmarine",
        client: "Przysnacki"
    }
];

export default ProjectList;