import React from 'react';

class SearchBar extends React.Component{

    state = {term: ''};


    onFormSubmit= (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
        <div style={{marginLeft: '10px', marginTop: '30px'}}>
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <label className='shadows-into-light-font' style={{fontSize: '30px'}}>Unsplash Images</label>
                <div className="fields" style={{ marginTop: '20px'}}>
                    
                    <input 
                    value={this.state.term} 
                    className="field" 
                    type="text" 
                    id="text" 
                    onChange={(e) => this.setState({term: e.target.value})}
                    
                    />
                    <button className='ui pink button' type='submit'>Search</button>
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;