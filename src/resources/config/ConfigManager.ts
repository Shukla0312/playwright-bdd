import config from '../../../config.json';

type Environment = 'dev' | 'qa' | 'uat';

export class ConfigManager {
    private static env: Environment = (process.env.ENV as Environment) || 'dev';

    static getConfig() {
        return config[this.env];
    }

    static get HRMS_URL() {
        return this.getConfig().HRMS_URL;
    }

    static get HRMS_USERNAME() {
        return this.getConfig().HRMS_USERNAME;
    }

    static get HRMS_PASSWORD() {
        return this.getConfig().HRMS_PASSWORD;
    }

    static get ETRAIN_URL() {
        return this.getConfig().ETRAIN_URL;
    }

    static get BLAZEDEMO_URL() {
        return this.getConfig().BLAZEDEMO_URL;
    }

    static get PLAYWRIGHT_URL() {
        return this.getConfig().PLAYWRIGHT_URL;
    }

    static get ECOMMERCE_URL() {
        return this.getConfig().ECOMMERCE_URL;
    }

    static get ECOMMERCE_USERNAME() {
        return this.getConfig().ECOMMERCE_USERNAME;
    }

    static get ECOMMERCE_PASSWORD() {
        return this.getConfig().ECOMMERCE_PASSWORD;
    }

    static get SKILLS_YOU_NEED_URL() {
        return this.getConfig().SKILLS_YOU_NEED_URL;
    }

    static get CHARTJS_URL() {
        return this.getConfig().CHARTJS_URL;
    }
}
