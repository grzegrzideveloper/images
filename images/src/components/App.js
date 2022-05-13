import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term)=>{

        const response = await unsplash.get('/search/photos', { params: { query: term,  per_page: 25} });
    
        this.setState({images: response.data.results});
    }

    render(){
        return (
            <div className='ui grid' >
                <div className='two column row' style={{height: '100vh', padding:0}}>
                    <div className='four wide column' style={{textAlign: 'center'}}>
                        
                        <SearchBar onSubmit={this.onSearchSubmit} />
                    </div>
                    <div className='twelve wide column' style={{backgroundColor: '#b76e79'}}>
                        <ImageList images={this.state.images}/>
                    </div>
                </div>
            </div>
            );
    };
};

export default App;