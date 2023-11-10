import { CloudSchedulerClient } from '@google-cloud/scheduler';

const JOB_NAME = 'birthday-scheduler';

async function createCronScheduler() {
    const cloudScheduler = new CloudSchedulerClient();

    const isJob = await cloudScheduler.getJob({ name: JOB_NAME });
    if (!isJob) {
        await cloudScheduler.createJob({
            parent: 'projects/' + process.env.PROJECT_ID,
            job: {
                name: JOB_NAME,
                schedule: '0 0 0 * * *',
                httpTarget: {
                    uri: 'https://us-central1-' + process.env.PROJECT_ID + '.cloudfunctions.net/birthday-scheduler',
                    httpMethod: 'GET',
                    oidcToken: {
                        serviceAccountEmail: process.env.SERVICE_ACCOUNT
                    }
                }
            }
        });
    }
}

export default {
    createCronScheduler
};
