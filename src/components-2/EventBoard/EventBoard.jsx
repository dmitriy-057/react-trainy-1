import { Event } from "../Event/Event"
import PropTypes from 'prop-types';
import css from './EventBoard.module.css'
export const EventBoard = ({events}) => {
    console.log(events)
    return <div className={css.eventCards}>
        {events.map(({name,location,speaker,type,time}) => 
        <Event key={name} name={name} location={location} speaker={speaker} type={type} start={time.start} end={time.end} />
        )}
    </div>
}
EventBoard.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.exact({
        optionalProperty: PropTypes.string,
        requiredProperty: PropTypes.number.isRequired
      })
    )
}