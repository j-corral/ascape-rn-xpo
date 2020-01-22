import React from 'react';
import {Block, Card} from "galio-framework";
import {StyleSheet} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

class RoomCalendar extends React.Component {
    render() {
        const {...extraProps} = this.props;
        return (
            <CalendarStrip
                calendarAnimation={{type: 'sequence', duration: 30}}
                daySelectionAnimation={{type: 'background', duration: 200, highlightColor: '#f2005d'}}
                calendarHeaderStyle={{color: 'black'}}
                calendarColor={'white'}
                dateNumberStyle={{color: 'black'}}
                dateNameStyle={{color: '#b2b2b2'}}
                highlightDateNumberStyle={{color: 'white'}}
                highlightDateNameStyle={{color: 'white'}}
                disabledDateNameStyle={{color: '#f8f8f8'}}
                disabledDateNumberStyle={{color: '#f8f8f8'}}
                style={Style.calendar}
                {...extraProps}
            />
        )
    }
}

const Style = StyleSheet.create({
    calendar: {
        height:110,
        margin:20,
        borderRadius:10,
        shadowColor: '#686868',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 5
    }
});

export default RoomCalendar;