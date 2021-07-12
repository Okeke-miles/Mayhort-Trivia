import React from 'react'
import ReactPlayer from 'react-player';
import Moment from "moment";
Moment().format()

function VideoPlayer() {
    // let timestart;

    let time = Moment()
    console.log(time)
    let newTime = Moment("2021-07-12 12:46:20")

    // if (time.isAfter(newTime)){
    //     let timestart = time.diff(newTime, "seconds")
    //     console.log(timestart)
    // }
    let timestart = time.diff(newTime, "seconds")

    const url=`https://www.youtube.com/embed/bx3--22D4E4?start=${timestart}`
    console.log(timestart)


    // const newDate = Moment()
    // console.log(newDate)
    
//     function showTime(){
//         let date = Moment();
//         let playTime = Moment("2021-07-09 21:33:50")
        
//         setTimeout(showTime, 1000);
//   }


/* Download Moment.
    set timestart to 0.
    Use isAfter. If time is after, the set time the video will play.
    Use difference but in seconds to set at what period the video will start.
*/
    return (

        Moment().isAfter("2021-07-12 12:46:20") ?
   <>
     <ReactPlayer
        url={ url }
        playing={ true}
        controls={true}
        autoPlay={true}
        muted={true}
        // style={{ pointerEvents: 'none' }}
        // width={props.width}
        // height={props.height}
      />
   </>
   : <p>Please wait for next video</p>
    )
}

export default VideoPlayer