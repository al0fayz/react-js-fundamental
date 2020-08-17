import React from 'react';
import ContohPropsComponent from '../component/ContohPropsComponent';

class ContohPropsComp extends React.Component{
    render(){
        return(
            <div>
                <ContohPropsComponent 
                    name="alfa Code"
                    jobs="hacker"
                    desc="bot life"
                />
                <ContohPropsComponent 
                    name="beta Code"
                    jobs="programmer"
                    desc="bot life"
                />
                <ContohPropsComponent 
                    name="zeta Code"
                    jobs="hacker"
                    desc="bot dead"
                />
                <ContohPropsComponent />
            </div>
        )
    }
}
export default ContohPropsComp;