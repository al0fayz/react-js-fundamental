import React from 'react';

const ContohPropsComponent = (props) => {
    return (
        <div className="card">
            <img className="card-img-top" src=".../100px180/" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.jobs}</p>
                    <a href="#" class="btn btn-primary">{props.desc}</a>
                </div>
        </div>
    )
}
ContohPropsComponent.defaultProps = {
    name : 'Alfa Zeta',
    jobs: "Bot",
    desc: "ui/ux"
}
export default ContohPropsComponent;