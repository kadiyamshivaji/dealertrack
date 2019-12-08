import {constructPayload} from '../lib/util'
import React from 'react';

import axios from 'axios';
  export const getToken=()=>{
    axios.get(`https://fni-api-np.dealertrack.com/sfni/uat1/credit-application/v1/deals/credit-apps`,
    { params: { grant_type : 'client_credentials',
    client_id:'21f80a27-97d1-43ea-bcf8-c2d64c20d91b',
    client_secret:'fJ5nG8jQ5hB7qT4bO6nE1tT8uO7eN5iC2uT1oA2xJ6eT7mW1aP',
    scope:'Unify-read unify-write',
 } })
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    })
  }
export const submit=(payload)=>{
    
    return constructPayload(payload);
}
