import service from "../fetchInterceptor";

const dataService = {};

// setting all the base api calls into the dataService object

dataService.getPayload = () =>
    service({
        url: '/953.1808062984861/programs/dolor/application-form',
        method: 'get',
        headers : {
            'Content-Type': 'application/json',
          }
    });

dataService.upadatePayload = (payload) =>
    service({
        url: '/180.52073301031265/programs/nisi/application-form',
        method: 'put',
        data: {data: payload},
        headers : {
            'Content-Type': 'application/json',
          }
    });
export default dataService;
