export class ColumnMap {

    primaryKey: string;
    private headerValue: string;
    private formatValue: string;
    alternativeKeys?: string[];

    constructor(settings: any) {
        this.primaryKey = settings.primaryKey;
        this.header = settings.header;
        this.format = settings.format;
        this.alternativeKeys = settings.alternativeKeys;
    }
    set header(setting: string) {
        let name = '';
        const recordName = this.primaryKey.split('_');
        for (const rec of recordName) {
            name += rec[0].toUpperCase() + rec.slice(1) + `${recordName.length > 1 ? ' ' : ''}`;
        }
        this.headerValue = setting ? setting : name;
    }
    get header() {
        return this.headerValue;
    }
    set format(setting: string) {
        this.formatValue = setting ? setting : 'default';
    }
    get format() {
        return this.formatValue;
    }
    access = (object: any) => {
        if (object[this.primaryKey] || !this.alternativeKeys) {
            return this.primaryKey;
        }
        for (const key of this.alternativeKeys) {
            if (object[key]) {
                return key;
            }
        }
        return this.primaryKey;
    }
}
