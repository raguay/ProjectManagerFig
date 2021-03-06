## Project Manager for Fig

This is a project manager application for the [fig](https://docs.withfig.com/) terminal 
assistant. This app will tie into my [Project Manager for fman](https://github.com/raguay/ProjectManager) 
and [Project Manager for Alfred](https://github.com/raguay/MyAlfred/blob/master/Alfred%204/Project%20Manager.alfredworkflow). 
It will also use the editor defined by the $EDITOR environment variable or the editor defined 
by the My Editor Alfred workflow or the CurrentFiles script used with [BitBar](http://getbitbar.org), 
[TextBar](http://richsomerfield.com/apps/textbar/), and ScriptBar (my own version that isn't available yet).
The goal is to have a nice, integrated way to work in and change projects.

You can run your `npm`, `mask`, `maid`, `grunt`, and `gulp` scripts from this application. You don't have 
to be in the root directory either. It will move the current shell to the root directory, 
run the script, and then go back to the directory you were in. If you don't have some of these 
it will not show them in the program. It also runs git status and commit commands.

### Getting Current Directory

The current fig API doesn't give real time current directory path. Therefore, this application 
addon uses a file `~/.path` that should have the latest directory path. The easiest way to set 
it is to run `pwd > ~/.path` inside the function for showing the shell prompt.

In Fish shell, you would add it to the function `fish_prompt`. My `fish_prompt` function is 

```
function fish_prompt
    pwd > ~/.path
    switch "$fish_key_bindings"
        case fish_hybrid_key_bindings fish_vi_key_bindings
            set keymap "$fish_bind_mode"
        case '*'
            set keymap insert
    end
    set -l exit_code $status
    # Account for changes in variable name between v2.7 and v3.0
    set -l starship_duration "$CMD_DURATION$cmd_duration"
    "/usr/local/bin/starship" prompt --status=$exit_code --keymap=$keymap --cmd-duration=$starship_duration --jobs=(count (jobs -p))
end
```

I am using [starship](https://starship.rs/) to create the prompt. The `fish_prompt` function 
has the line to set current directory. This isn't the most ideal solution, but it does work. 

If you don't have this file, then the application will use `fig.env.PWD` which has the 
directory that the application was opened on.

### Installing

Currently, fig doesn't have a way to download third party applications like it does for 
runbooks. Therefore, you need to download this full archive and place it in your `~/run` 
directory. You should then be able to use `fig projectmanagerfig` to run it, but that doesn't 
work on my system. Therefore, you will need to run `fig local ~/run/projectmanagerfig/index.html`.

### Features

- Go to predefined projects
- Edit the project directory
- Delete the current project from the list of projects.
- Edit maid, mask, npm, gulp, and grunt configuration files
- Run tasks defined in maid, mask, npm, gulp, and grunt
- Edit/Run the project startup script
- Setup new project directories from the currently visited project in the shell
- If the project has a git repository, the following is possible without having to be in the root directory of the project:
    - get a status
    - commit with a message
- It will use the editor defined in the BitBar, TextBar, and Alfred CurrentFiles scripts. The editor is designated in the file `~/.myeditorchoice` and is ran with the `open` command. If the file doesn't exist, then it will run the editor defined by the $EDITOR environment variable.
- Project templates: either local or on GitHub with a initializer script that will be ran after 
copying.
- Project Notes: a special directory `.notes` will contain notes you create for this project. It works with the [fman](https://fman.io/) [Notes plugin](https://github.com/raguay/Notes). You can edit, delete, and create new notes.
- Better styling and dark mode 

### Ideals and Suggestions

If there is a feature you would like to see in the application or a bug, just create an issue in this 
repository with the subject `[feature]` or `[bug]` in the subject line. I'm still working on:

- Mask subcommands and parameters

