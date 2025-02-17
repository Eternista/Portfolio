import { SingleProjectProps } from "./interfaces";
import ChatPG from "../assets/Projects/ChatPG.jpg";
import PG from "../assets/Projects/pg-edu.jpg";
import Honda from "../assets/Projects/honda.jpg";
import KupHipoteke from "../assets/Projects/kuphipoteke.jpg";
import Przysnacki from "../assets/Projects/przysnacki.jpg";

const ProjectList: SingleProjectProps[] = [
    {
        heading: "ChatPG - AI dla studentów i pracowników",
        headingEN: "ChatPG - AI for students and employees",
        description: "AI dla studentów i pracowników, pomagające w uzyskiwaniu informacji. Projekt realizowany we współpracy z programistą JAVA i specjalistą AI",
        descriptionEN: "AI for students and employees to help with getting information. Project realized with a JAVA developer and AI specialist",
        role: "Frontend Developer",
        imageAlt: "Obraz wersji administracyjnej ChatPG",
        imageAltEN: "Image of ChatPG Admin version",
        image: ChatPG,
        firm: "Politechnika Gdańska",
        firmEN: "Gdańsk University of Technology"
    },
    {
        heading: "PG Website - Strona informacyjna PG",
        headingEN: "PG Website - Information Website of PG",
        description: "",
        descriptionEN: "",
        role: "Frontend Developer",
        imageAlt: "Obraz strony pg.edu.pl",
        imageAltEN: "Image of pg.edu.pl",
        image: PG,
        firm: "Politechnika Gdańska",
        firmEN: "Gdańsk University of Technology"
    },
    {
        heading: "Honda - Samochody hybrydowe",
        headingEN: "Honda - Hybrid Cars",
        description: "Strona internetowa o najnowszym projekcie samochodów hybrydowych Hondy - współpracowałem z Backend Developerem, UX/UI Designerem, Managerem zadań, Asystentem klienta oraz Managerem projektu",
        descriptionEN: "Website about Honda's newest Hybrid Cars project - I collaborated with a Backend Developer, UX/UI Designer, Task Manager, Client Assistant, and Project Manager",
        role: "Frontend Developer",
        imageAlt: "Obraz strony honda",
        imageAltEN: "Image of honda",
        image: Honda,
        firm: "GoldenSubmarine",
        firmEN: "GoldenSubmarine",
        client: "Honda",
    },
    {
        heading: "Kup Hipotekę",
        headingEN: "Kup Hipotekę",
        description: "Strona internetowa umożliwiająca zakup nieruchomości. Tworzyłem ten projekt przy wsparciu Backend Developera, UI-UX Designera, Asystenta klienta, Managera projektu oraz Managera zadań",
        descriptionEN: "Website which allows users to buy real estate. I created this project with the help of a Backend Developer, UI-UX Designer, Client Assistant, Project Manager, and Task Manager",
        role: "Frontend Developer",
        imageAlt: "Obraz strony kupHipoteke",
        imageAltEN: "Image of kupHipoteke",
        image: KupHipoteke,
        firm: "GoldenSubmarine",
        firmEN: "GoldenSubmarine",
        client: "Ultimo",
    },
    {
        heading: "Przysnacki",
        headingEN: "Przysnacki",
        description: "Strona informacyjna dla popularnej firmy produkującej przekąski. Projekt realizowany przez sześcioosobowy zespół: Backend Developer, UI-UX Designer, Asystent klienta, Manager projektu, Manager zadań",
        descriptionEN: "Information page for a popular snack company. This project was realized with the help of a six-person team: Backend Developer, UI-UX Designer, Client Assistant, Project Manager, Task Manager",
        role: "Frontend Developer",
        imageAlt: "Obraz strony przysnacki",
        imageAltEN: "Image of przysnacki",
        image: Przysnacki,
        firm: "GoldenSubmarine",
        firmEN: "GoldenSubmarine",
        client: "Przysnacki",
    }
];

export default ProjectList;
