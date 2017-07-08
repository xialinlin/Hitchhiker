import { DtoUser } from './dto_user';
import { DtoEnvironment } from './dto_environment';

export interface DtoProject {

    id: string;

    name: string;

    note?: string;

    members?: DtoUser[];

    environments?: DtoEnvironment[];

    isMe?: boolean;

    owner: Partial<DtoUser>;

    createDate?: Date;
}