import React from 'react';
import { Route, Switch } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import EntryForm from "./entry_form";
import QuestionsContainer from "./questions_container";
import DoneScreen from "./done_screen";

export default ()=>{
  return (
    <HashRouter>
      <Switch>
        <Route path = "/" exact component={EntryForm} />
        <Route path = "/:userId/questions" component={QuestionsContainer} />
        <Route path = "/done" component={DoneScreen} />
      </Switch>
    </HashRouter>
  );
};