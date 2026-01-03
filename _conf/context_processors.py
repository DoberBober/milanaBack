from pathlib import Path
import os
BASE_DIR = Path(__file__).resolve().parent.parent

import environ
env = environ.Env()
root = environ.Path(__file__) - 3
environ.Env.read_env(env_file=os.path.join(BASE_DIR, ".env"))

def venv_variables(request):
	return {
		'venv': {
			'gtm': env.str("GTM_ID", ""),
			'dev': env.str("DEV", "") == 'True'
		}
	}
