import React from 'react';
import { connect } from 'react-redux'


let NewsItem = ({ news }) => (
  
        <news>
            <div >
                <p>Hell0</p>
            </div>
        </news> 
);

const mapStateToProps = (state) => ({
    news: state.news
})

NewsItem = connect(mapStateToProps, null)(NewsItem);
export default NewsItem;
