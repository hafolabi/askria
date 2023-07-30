import service from "../fetchInterceptor";

const dataService = {};

// setting all the base api calls into the dataService object

dataService.getPayload = () =>
    service({
        url: '/898.0974431257172/programs/odio/application-form',
        method: 'get',
        headers : {
            'Content-Type': 'application/json',
          }
    });

dataService.upadatePayload = () =>
    service({
        url: '/647.7531040230652/programs/exercitationem/application-form',
        method: 'put',
        headers : {
            'Content-Type': 'application/json',
          }
    });
export default dataService;
