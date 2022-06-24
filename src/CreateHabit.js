import React from "react";
import purecss from "purecss";

const CreateHabit = () => {
    return (
        <div>
            <form class="pure-form pure-form-aligned">
                <fieldset>
                    <div class="pure-control-group">
                        <label for="aligned-name">Name of Habit</label>
                        <input type="text" id="aligned-name" placeholder="Name" />
                    </div>
                    <div class="pure-control-group">
                        <label for="aligned-password">Description of Habit</label>
                        <input type="text" id="aligned-description" placeholder="Describe your new habit" />
                    </div>
                    <div class="pure-control-group">
                        <label for="aligned-foo">Goal of Habit</label>
                        <input type="text" id="aligned-foo" placeholder="Goal" />
                    </div>
                    <div>
                        <select id="stacked-state">
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                            <option>Sunday</option>
                        </select>
                    </div>
                    <div class="pure-controls">
                        <button type="submit" class="pure-button pure-button-primary">Submit</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default CreateHabit