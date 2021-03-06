import React, {useState} from "react";
import './App.css';
import {PageLayout} from "./Component/PageLayout";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import Button from "react-bootstrap/Button";
import { ProfileData } from "./Component/ProfileData";
import { callMsGraph } from "./graph";

function ProfileContent() {
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);

    const name = accounts[0] && accounts[0].name;

    function RequestProfileData() {
        const request = {
            ...loginRequest,
            account: accounts[0]
        };

        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance.acquireTokenSilent(request).then((response) => {
            callMsGraph(response.accessToken).then(response => setGraphData(response));
        }).catch((e) => {
            instance.acquireTokenPopup(request).then((response) => {
                callMsGraph(response.accessToken).then(response => setGraphData(response));
            });
        });
    }

    return (
        <>
            <h5 className="card-title">Welcome {name}</h5>
            {graphData ?
                <ProfileData graphData={graphData} />
                :
                <Button variant="secondary" onClick={RequestProfileData}>Request Profile Information</Button>
            }
        </>
    );
};

const App = (props) => {
    return (
        /*<div className="app-wrapper">
            <Header/>
            <Router>
                <Navigation/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/"/>
                        <Route path="/data" element={<SomeData/>}/>
                        {/!*<Route path="/prop" element={<PropComp post={{
                        id: 1,
                        title: "propComp", body: "Description"
                    }}/>}/>*!/}
                        <Route path="/dialogs" element={<Dialogs/>}/>
                        <Route path="/page" element={<PageLayout/>}/>
                    </Routes>
                </div>
            </Router>
        </div>*/
        <PageLayout>
            <AuthenticatedTemplate>
                <ProfileContent />
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <p>You are not signed in! Please sign in.</p>
            </UnauthenticatedTemplate>
        </PageLayout>
    );
}

export default App;