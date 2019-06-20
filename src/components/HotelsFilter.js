import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, setLocactionFilter } from '../actions/filters';
import { changeHotelsLayoutList, changeHotelsLayoutGrid } from '../actions/layouts';

class HotelsFilter extends React.Component {
    render() {
        console.log(this.props.filters.text)
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="filter-by-name">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control custom-input" 
                                    placeholder="Search..."
                                    value={this.props.filters.text}
                                    onChange={(e) => {
                                        this.props.dispatch(setTextFilter(e.target.value))
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="filter-by-location">
                            <div className="form-group">
                                <select className="form-control custom-input" value={this.props.filters.location} onChange={(e) => {
                                    this.props.dispatch(setLocactionFilter(e.target.value))
                                }}>
                                    <option value="">Location</option>
                                    <option value="kandy">Kandy</option>
                                    <option value="habarana">Habarana</option>
                                    <option value="dambulla">Dambulla</option>
                                    <option value="sigiriya">Sigiriya</option>
                                    <option value="colombo">Colombo</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-3">
                        <div className="layout">
                            <span 
                                className="list" 
                                onClick={() => this.props.dispatch(changeHotelsLayoutList())}
                            >
                                <i className="fa fa-th-list" aria-hidden="true"></i>
                            </span>
                            <span 
                                className="grid"
                                onClick={() => this.props.dispatch(changeHotelsLayoutGrid())}
                            >
                                <i className="fa fa-th" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
    

const mapStateToProps = (state) => {
    return {
        filters: state.filters,
        layouts: state.layouts
    }
}

export default connect(mapStateToProps)(HotelsFilter);