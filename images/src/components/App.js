import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import Modal from './Modal';

class App extends React.Component {
    state = { images: [], modalOpen: false, image: '' };
    
    onSearchSubmit = async (term)=>{

        const response = await unsplash.get('/search/photos', { params: { query: term,  per_page: 10} });
    
        this.setState({images: response.data.results});
    };
    
    onModalOpen = (img) => {
        this.setState({modalOpen: true, image:img});
        document.body.style.overflowX = 'hidden';
    };
    onModalClose = () => {
        this.setState({modalOpen: false});
        document.body.style.overflowX = 'auto';
    }; 
    render(){
        return (
            <>
                <div className='ui grid' >
                    <div className='two column row' style={{height: '100vh', padding:0}}>
                        <div className='four wide column' style={{textAlign: 'center'}}>
                            
                            <SearchBar onSubmit={this.onSearchSubmit} />
                        </div>
                        <div className='twelve wide column' style={{backgroundColor: '#b76e79'}}>
                            <ImageList modalOpen={this.onModalOpen} images={this.state.images}/>
                        </div>
                    </div>
                </div>
                <Modal open={this.state.modalOpen} image={this.state.image} close={this.onModalClose}></Modal>
            </> 
            );
    };
};

export default App;