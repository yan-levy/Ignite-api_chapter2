import { ISpecificationRespository } from "../repositories/ISpecificationRepository";

interface IResquest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private specificationsRepository: ISpecificationRespository) {}

    execute({ name, description }: IResquest): void {
        const specificationAlredyExists =
            this.specificationsRepository.findByName(name);

        if (specificationAlredyExists) {
            throw new Error("Specification already exists!");
        }

        this.specificationsRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationService };
