import React, { useState } from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoList, VideoDetail } from './components';

import youtube from './api/youtube';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleSumbit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyAJoCS3tW_BQg4uaj7GVNp1M2s9GnXii9E',
                q: searchTerm,
            }
        });

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    }



    return (
        <Grid justify="center" container spacing={12}>
            <Grid container spacing={5} direction="row" justify="space-around">
                <Grid item xs={12}>
                    <SearchBar onFormSubmit={handleSumbit} />
                </Grid>
                <Grid container spacing={10}>
                    <Grid item xs={8}>
                        <VideoDetail video={selectedVideo} />
                    </Grid>
                    <Grid item xs={4}>
                        <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}


// class App extends React.Component {
//     state = {
//         videos: [],
//         selectedVideo: null
//     }


//     componentDidMount() {
//         this.handleSumbit('youtube');
//     }

//     handleSumbit = async (searchTerm) => {
//         const response = await youtube.get('search', {
//             params: {
//                 part: 'snippet',
//                 maxResults: 5,
//                 key: 'AIzaSyAJoCS3tW_BQg4uaj7GVNp1M2s9GnXii9E',
//                 q: searchTerm,
//             }
//         });

//         this.setState({
//             videos: response.data.items,
//             selectedVideo: response.data.items[0],
//         });
//     }

//     onVideoSelect = (video) => {
//         this.setState({
//             selectedVideo: video,
//         })
//     }

//     render() {
//         const { selectedVideo, videos } = this.state;
//         return (
//             <Grid justify="center" container>

//                 <Grid container spacing={5} direction="row" justify="space-around">
//                     <Grid item xs={12}>
//                         <SearchBar onFormSubmit={this.handleSumbit} />
//                     </Grid>
//                     <Grid container spacing={10}>
//                         <Grid item xs={8}>
//                             <VideoDetail video={selectedVideo} />
//                         </Grid>
//                         <Grid item xs={4}>
//                             <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </Grid>
//         )
//     }
// }



export default App;