interface Page{
    id:string,
    name: string,
    url: string,
    time_zone:string,
    updated_at:string
}

interface Status{
    description: string,
    indicator: string
}

export interface IComponents{
    id:string,
    name:string,
    status:string,
    created_at:string,
    updated_at:string,
    position:number,
    description:string,
    showcase:boolean,
    start_date:string | null,
    group_id:string|null,
    page_id:string,
    group:boolean,
    only_show_if_degraded:boolean
}

interface Incidents{
    created_at:string,
    id:string,
    impact:string
    incident_updated: IncidentUpdated[],
    monitoring_at: string | null,
    name: string,
    resolved_at: string | null,
    shortlink: string,
    status: string,
    updated_at:string
}

interface IncidentUpdated{
    body: string,
    created_at: string,
    display_at:string,
    id:string,
    incident_id:string,
    status:string,
    updated_at:string
}

export interface IDiscord{
    page: Page,
    status: Status,
    components: IComponents[],
    incidents: Incidents[] | null,
    scheduled_maintenances: Incidents[] | null
}