"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const Joi = require("joi");
let UsersService = class UsersService {
    constructor(repository) {
        this.repository = repository;
    }
    getUserSchema() {
        const schema = Joi.object().keys({
            id: Joi.string(),
            name: Joi.string().required(),
            email: Joi.string().required(),
            team: Joi.string().allow(null),
            createdAt: Joi.date(),
            modifiedAt: Joi.date()
        });
        return schema;
    }
    async save(data) {
        const validatedData = this.getUserSchema().validate(data);
        const user = this.repository.create(validatedData.value);
        return await this.repository.save(user);
    }
    async findOne(id) {
        return await this.repository.findOne(id, {
            relations: ['team'],
        });
    }
    async findAll() {
        return await this.repository.find();
    }
    async update(id, data) {
        return await this.repository.update(id, data);
    }
    async delete(id) {
        return await this.repository.delete({ id: id });
    }
    async getRepository() {
        return this.repository;
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map