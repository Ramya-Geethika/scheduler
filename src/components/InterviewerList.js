import React from "react";
import InterviewerListItem from "components/InterviewerListItem";
import "components/InterviewerList.scss";

import PropTypes from 'prop-types';

const classNames = require("classnames");


function InterviewerList(props) {
  const interviewerClass = classNames("interviewers", {
    interviewers__header: props.header,
    interviewers__list: props.list
  });
  const interviewers = props.interviewers.map(interviewer => {
    return (
    <InterviewerListItem
    key={interviewer.id}
    name={interviewer.name}
    avatar={interviewer.avatar}
    selected={interviewer.id === props.interviewer }
    setInterviewer={event => props.setInterviewer(interviewer.id)}
    />
  );
});
  return (
    <li className={interviewerClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};

export default InterviewerList;