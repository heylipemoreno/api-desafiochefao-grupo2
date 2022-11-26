import constants from "../../../config/constants/constants";
import { Questions } from "../../../entities/Questions";
import { QuestionsRepository } from "../repositories/QuestionsRepository";

export class UpdateQuestiosnUseCase {
    async execute(data: Questions, dataID: number) {
        try {
            const { questionTitle, questionImageLink, questionContent, questionOptions, questionOptionCorrect, questionTemplate, isExplanation, lessonsId, songsId } = data
            const question = await QuestionsRepository.findOneBy({ id: dataID });
            if (!question) {
                return constants.CRUD.QUESTIONS.NOT_FOUND
            }
            const updated = await QuestionsRepository.update({ id: dataID }, {
                questionTitle,
                questionImageLink,
                questionContent,
                questionOptions,
                questionOptionCorrect,
                questionTemplate,
                isExplanation,
                lessonsId,
                songsId
            })
            return constants.CRUD.QUESTIONS.UPDATE
        } catch (error) {
            console.log(error)
        }
    }
}

export default new UpdateQuestiosnUseCase();