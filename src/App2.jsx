import { PageTitle } from "./components-2/PageTitle/PageTitle";
import { EventBoard } from "./components-2/EventBoard/EventBoard";
import upcomingEvents from "./upcoming-events.json";

// именованый экспорт
export const  App2 = () =>{
    return (
    <>
        <PageTitle text='24th Core Worlds Coalition Conference'/>
        <EventBoard events={upcomingEvents}/>
    </>
    )
}