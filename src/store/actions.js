import axios from "axios";
import { YANDEX_API, YANDEX_KEY } from "../../config";

export default {
    async TRANSLATE_WORD({ commit, state }, { userInput }) {
        const { selectedLang } = state;
        const translation = await axios.get(`${YANDEX_API}/translate`, {
            params: {
                key: YANDEX_KEY,
                lang: `en-${selectedLang || "en"}`,
                text: userInput || ""
            }
        }).then(res => (res.data && res.data.text.length ? res.data.text[0] : ""));
        commit("MUTATE_TRANSLATION_WORD", { translation, loading: false });
    },
    async GET_LANGS({ commit }) {
        const langs = await axios.get(`${YANDEX_API}/getLangs`, {
            params: {
                key: YANDEX_KEY,
                ui: "en"
            }
        }).then(res => (res.data && res.data.langs ? res.data.langs : null));
        commit("MUTATE_LANGS", langs);
    }
};
